package com.catalogofilmes.catalogo_filmes.repository;

import com.catalogofilmes.catalogo_filmes.model.*;
import org.springframework.data.jpa.repository.JpaRepository;

public interface FilmeRepository extends JpaRepository<Filme, Long> {
}
