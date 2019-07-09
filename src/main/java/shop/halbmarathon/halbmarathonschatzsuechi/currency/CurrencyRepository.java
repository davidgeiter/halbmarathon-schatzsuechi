package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

public interface CurrencyRepository extends JpaRepository<Athlete, Long> {

	List<Athlete> findAll();

}
