package shop.halbmarathon.halbmarathonschatzsuechi.pay;

import java.math.BigInteger;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

import lombok.RequiredArgsConstructor;
import shop.halbmarathon.halbmarathonschatzsuechi.currency.CurrencyService;

@Controller
@RequiredArgsConstructor
public class PayController {

	private final PayService payService;

	@PostMapping(value = "/api/pay/{amount}")
	public void pay(@PathVariable final BigInteger amount, @RequestParam final String username) {
		payService.pay(amount, username);
	}
}
