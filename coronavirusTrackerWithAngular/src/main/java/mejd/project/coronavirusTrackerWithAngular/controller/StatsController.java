package mejd.project.coronavirusTrackerWithAngular.controller;



import mejd.project.coronavirusTrackerWithAngular.model.LocationStats;
import mejd.project.coronavirusTrackerWithAngular.service.DataService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
