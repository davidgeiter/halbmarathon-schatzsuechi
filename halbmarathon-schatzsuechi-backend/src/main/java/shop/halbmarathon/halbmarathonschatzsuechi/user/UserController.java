package shop.halbmarathon.halbmarathonschatzsuechi.user;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyService;

@RestController
@RequiredArgsConstructor
public class UserController {

	private final CurrencyService currencyService;

	@GetMapping(value = "/api/user", produces = "application/json")
	public BooleanDto doesUsernameExist(@RequestParam String username) {
		return new BooleanDto(currencyService.doesUsernameExist(username));
	}
}
