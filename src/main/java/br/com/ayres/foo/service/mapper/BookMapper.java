package br.com.ayres.foo.service.mapper;

import br.com.ayres.foo.domain.Book;
import br.com.ayres.foo.service.dto.BookDTO;
import org.mapstruct.*;

/**
 * Mapper for the entity {@link Book} and its DTO {@link BookDTO}.
 */
@Mapper(componentModel = "spring", uses = { AuthorMapper.class })
public interface BookMapper extends EntityMapper<BookDTO, Book> {
    @Mapping(target = "author", source = "author", qualifiedByName = "name")
    BookDTO toDto(Book s);
}
