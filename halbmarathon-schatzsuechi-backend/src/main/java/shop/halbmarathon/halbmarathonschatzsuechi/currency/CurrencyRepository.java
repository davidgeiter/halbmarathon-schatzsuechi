package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<Athlete, String> {

	List<Athlete> findAll();

	Athlete findAthleteByUsername(final String usename);

}
