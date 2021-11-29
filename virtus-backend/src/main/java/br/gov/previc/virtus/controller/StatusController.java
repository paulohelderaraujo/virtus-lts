package br.gov.previc.virtus.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;
import java.util.stream.StreamSupport;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;

import br.gov.previc.virtus.domain.Status;
import br.gov.previc.virtus.repository.StatusRepository;

@Controller
@CrossOrigin(origins = { "http://localhost:4200" })
public class StatusController {
    @Autowired
    private StatusRepository statusRepository;

    @GetMapping(path = "/statuses")
    public @ResponseBody List<Status> getAll() {
        Iterable<Status> iterable = statusRepository.findAll();
        List<Status> result = StreamSupport.stream(iterable.spliterator(), false).collect(Collectors.toList());
        return result;
    }

    @PostMapping(value = "/status")
    public @ResponseBody Status add(@RequestBody Status status) {
        System.out.println("Adding "+status.getName());
        return statusRepository.save(status);
    }

    @DeleteMapping("/status/{id}")
    public ResponseEntity<Map<String, Boolean>> delete(@PathVariable int id) {
        Status status = statusRepository.findById(id).get();
        statusRepository.delete(status);
		Map<String, Boolean> response = new HashMap<>();
		response.put("deleted", Boolean.TRUE);
		return ResponseEntity.ok(response);        
    }

    @PutMapping("/status/{id}")
	public ResponseEntity<Status> update(@PathVariable Integer id, @RequestBody Status statusDetails){
		Status status = statusRepository.findById(id).get();
		status.setName(statusDetails.getName());
		Status updatedStatus = statusRepository.save(status);
		return ResponseEntity.ok(updatedStatus);
	}

}