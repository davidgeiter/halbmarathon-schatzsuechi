package shop.halbmarathon.halbmarathonschatzsuechi.highscore;

import java.util.List;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class ScoresDto {
	private List<Score> scores;
}
