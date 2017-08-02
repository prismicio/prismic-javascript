export interface Variation {
  id: string;
  ref: string;
  label: string;
}

export interface Experiment {
  id: string;
  googleId: string;
  name: string;
  variations: Variation[]
}

export class Experiments {
  drafts: Experiment[];
  running: Experiment[];

  constructor(data: any) {
    if(data) {
      this.drafts = (data.drafts || []) as Experiment[];
      this.running = (data.running || []).map((exp: any) => {
        return new Experiment(exp);
      });
    }
  }

  current(): Experiment | null {
    return this.running.length > 0 ? this.running[0] : null;
  }

  refFromCookie(cookie: string): string | null {
    if (!cookie || cookie.trim() === "") return null;
    const splitted = cookie.trim().split(" ");
    if (splitted.length < 2) return null;
    const expId = splitted[0];
    const varIndex = parseInt(splitted[1], 10);
    const exp = this.running.filter(function(exp) {
      return exp.googleId() == expId && exp.variations.length > varIndex;
    })[0];
    return exp ? exp.variations[varIndex].ref : null;
  }
}
