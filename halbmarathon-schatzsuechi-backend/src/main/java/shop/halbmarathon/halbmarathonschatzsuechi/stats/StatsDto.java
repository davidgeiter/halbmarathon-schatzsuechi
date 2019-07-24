package shop.halbmarathon.halbmarathonschatzsuechi.stats;

import java.math.BigInteger;

import lombok.Builder;
import lombok.Data;

@Data
@Builder
public class StatsDto {
	private String username;
	private BigInteger currentCurrency;
	private BigInteger totalCurrency;
	private BigInteger totalSpent;
	private BigInteger totalCodesFound;
}
