package mejd.project.coronavirusTrackerWithAngular.model;


import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class TotalCases {
    private  Integer totalGlobalCases;
    private Integer totalNewCases;
}
