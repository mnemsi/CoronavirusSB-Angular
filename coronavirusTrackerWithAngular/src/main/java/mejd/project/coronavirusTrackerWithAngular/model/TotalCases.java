package mejd.project.coronavirusTrackerWithAngular.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TotalCases {
    private int totalGlobalCases;
    private int totalNewCases;
}
