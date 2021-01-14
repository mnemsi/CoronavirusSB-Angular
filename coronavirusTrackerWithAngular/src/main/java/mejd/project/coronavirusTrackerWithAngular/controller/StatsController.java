package mejd.project.coronavirusTrackerWithAngular.controller;



import mejd.project.coronavirusTrackerWithAngular.model.LocationStats;
import mejd.project.coronavirusTrackerWithAngular.model.TotalCases;
import mejd.project.coronavirusTrackerWithAngular.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:4200")
@RequestMapping("/api/v1")
public class StatsController {
    @Autowired
    DataService dataService;

    @GetMapping("/")
    public String getHome(){
        return "hello";
    }

    @GetMapping("/stats")
    public List<LocationStats> getStats(){
        return dataService.getStats();
    }

    @GetMapping("/totalstats")
    public TotalCases getTotalStats(){
        TotalCases totalCases = new TotalCases();
        List<LocationStats> allStats = dataService.getStats();
        totalCases.setTotalGlobalCases(allStats.stream().mapToInt(stats -> stats.getLatestTotalCases()).sum());
        totalCases.setTotalNewCases(allStats.stream().mapToInt(stats -> stats.getNewCases()).sum());

        return totalCases;
    }
}
