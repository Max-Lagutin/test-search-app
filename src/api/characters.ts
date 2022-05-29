import { api } from './index';

export function getCharacters({pageNumber = 0, search='', status='', gender='', species=''}) {
    console.log('status', status);
    return api.get(`https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`);
}
