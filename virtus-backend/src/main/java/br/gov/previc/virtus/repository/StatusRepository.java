package br.gov.previc.virtus.repository;

import org.springframework.data.repository.CrudRepository;

import br.gov.previc.virtus.domain.Status;

public interface StatusRepository extends CrudRepository<Status, Integer> {}