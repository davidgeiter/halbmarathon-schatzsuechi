package shop.halbmarathon.halbmarathonschatzsuechi.highscore;

import java.math.BigInteger;
import java.net.SocketException;
import java.net.UnknownHostException;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.Mapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequiredArgsConstructor
@CrossOrigin
public class HighscoreController {

	private final HighscoreService highscoreService;

	@GetMapping(value = "/api/highscore")
	public ScoresDto getHighscore() {
		return highscoreService.getHighscores();
	}
}
