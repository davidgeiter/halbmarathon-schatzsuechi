package shop.halbmarathon.halbmarathonschatzsuechi.currency;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface CurrencyRepository extends JpaRepository<User, Long> {

	Optional<User> findUserByMacAddress(byte[] macAddress);

	List<User> findAll();
}
