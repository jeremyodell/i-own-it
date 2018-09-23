export class Settings {
  constructor(public name: string,
              public shortName: string,
              public loadingSpinner: boolean,
              public fixedHeader: boolean,
              public theme: string,
              public logo: string) {
  }
}
