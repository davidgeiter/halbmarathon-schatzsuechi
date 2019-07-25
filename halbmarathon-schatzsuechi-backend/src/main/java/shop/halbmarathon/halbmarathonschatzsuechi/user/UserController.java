package shop.halbmarathon.halbmarathonschatzsuechi.user;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.Athlete;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyRepository;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyService;

@RestController
@RequiredArgsConstructor
public class UserController {

	private final CurrencyService currencyService;
	private final CurrencyRepository currencyRepository;

	@GetMapping(value = "/api/user", produces = "application/json")
	public BooleanDto doesUsernameExist(@RequestParam String username) {
		return new BooleanDto(currencyService.doesUsernameExist(username));
	}

	@GetMapping(value = "/api/users", produces = "application/json")
	public List<String> getUsernames() {
		return currencyRepository.findAll().stream()
				.map(Athlete::getUsername)
				.collect(Collectors.toList());
	}

}
