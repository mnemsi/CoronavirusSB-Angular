package mejd.project.coronavirusTrackerWithAngular.service;


import lombok.Data;
import mejd.project.coronavirusTrackerWithAngular.model.LocationStats;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;

import org.apache.commons.csv.CSVFormat;
import org.apache.commons.csv.CSVRecord;
import javax.annotation.PostConstruct;
import java.io.IOException;
import java.io.StringReader;
import java.net.URI;
import java.net.http.HttpClient;
import java.net.http.HttpRequest;
import java.net.http.HttpResponse;
import java.util.ArrayList;
import java.util.List;

@Service
@Data
public class DataService {
    private List<LocationStats> stats = new ArrayList<>();
    private static String VIRUS_DATA_URL= "https://raw.githubusercontent.com/CSSEGISandData/COVID-19/master/csse_covid_19_data/csse_covid_19_time_series/time_series_covid19_confirmed_global.csv";

    //PostConstruct is an annotation used on a method that needs to be executed after dependency injection
    //is done to perform any initialization.
    @PostConstruct
    @Scheduled(cron = "* * 1 * * *")
    //to initialize stats variable
    public void fetchData() throws IOException, InterruptedException {
        List<LocationStats> newStats = new ArrayList<>();

        HttpClient client = HttpClient.newHttpClient();

        HttpRequest request = HttpRequest.newBuilder().uri(URI.create(VIRUS_DATA_URL)).build();

        HttpResponse<String> httpResponse = client.send(request, HttpResponse.BodyHandlers.ofString());

        StringReader csv = new StringReader(httpResponse.body());

        Iterable<CSVRecord> records = CSVFormat.DEFAULT.withFirstRecordAsHeader().parse(csv);

        for(CSVRecord record : records){
            LocationStats locationStat = new LocationStats();

            locationStat.setState(record.get("Province/State"));
            locationStat.setCountry(record.get("Country/Region"));

            int latestCases = Integer.parseInt(record.get(record.size() - 1));
            int previousDayCases = Integer.parseInt(record.get(record.size() - 2));

            locationStat.setLatestTotalCases(latestCases);
            locationStat.setNewCases(latestCases - previousDayCases);

            newStats.add(locationStat);
        }

        this.stats = newStats;

    }

}
