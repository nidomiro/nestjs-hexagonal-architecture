
export const RepositoryInjectToken = Symbol('RepositoryInjectToken')

export interface Repository {
  someRepoMethod: () => void
}
