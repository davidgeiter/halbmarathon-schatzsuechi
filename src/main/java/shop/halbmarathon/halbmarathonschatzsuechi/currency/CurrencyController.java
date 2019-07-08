package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.math.BigInteger;
import java.net.InetAddress;
import java.net.NetworkInterface;
import java.net.SocketException;
import java.net.UnknownHostException;

import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;

import lombok.RequiredArgsConstructor;

@Controller
@RequiredArgsConstructor
public class CurrencyController {

	private final CurrencyService currencyService;

	//TODO: handle mac address and username
	@PostMapping(value = "/api/currency/{qrId}")
	public void moneymoney(@PathVariable final BigInteger qrId) throws UnknownHostException, SocketException {
		final InetAddress ip = InetAddress.getLocalHost();
		final NetworkInterface network = NetworkInterface.getByInetAddress(ip);
		final byte[] macAddress = network.getHardwareAddress();
		currencyService.moneymoney(qrId, macAddress);
	}
}
