package shop.halbmarathon.halbmarathonschatzsuechi.database;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.Athlete;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;

@RestController
@RequiredArgsConstructor
public class DatabaseController {

	private final CurrencyRepository currencyRepository;

	@GetMapping(value = "/api/database", produces = "application/json")
	public List<Athlete> getAthletes() {
		return currencyRepository.findAll();
	}

	@GetMapping(value = "/api/database/{username}", produces = "application/json")
	public Athlete getAthlete(@PathVariable final String username) {
		return currencyRepository.findAthleteByUsername(username);
	}
}
