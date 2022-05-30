import { api } from './index'

export function getCharacters({
    pageNumber = 0,
    search = '',
    status = '',
    gender = '',
    species = '',
}) {
    return api.get(
        `https://rickandmortyapi.com/api/character/?page=${pageNumber}&name=${search}&status=${status}&gender=${gender}&species=${species}`
    )
}

export function getCharacter(id: string) {
    return api.get(`https://rickandmortyapi.com/api/character/${id}`)
}

export async function getCharacterEpisodes(episode: []) {
    if (episode && !!episode.length) {
        const data = await Promise.all(
            episode.map(async episodeUrl => {
                return await api.get(episodeUrl)
            })
        )
        return data;
    }
}
