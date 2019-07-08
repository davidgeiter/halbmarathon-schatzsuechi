package shop.halbmarathon.halbmarathonschatzsuechi.highscore;

import java.math.BigInteger;
import java.net.SocketException;
import java.net.UnknownHostException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class HighscoreController {

	private final HighscoreService highscoreService;

	@PostMapping(value = "/api/currency/{qrId}")
	public ScoresDto getHighscore(@PathVariable final BigInteger qrId) throws UnknownHostException, SocketException {
		return highscoreService.getHighscores();
	}
}
