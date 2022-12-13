export class BadgindControls {
  allCount = 0;

  increaseBadgeCount(): void {
    this.allCount += 1;
    this.start();
  }

  async start(): Promise<void> {
    const filmeAnterior = await fetch('http://localhost:3333/movies');
    this.allCount = (await filmeAnterior.json()).length;

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (navigator as any).setAppBadge(this.allCount);
  }
}

export const badgindControls = new BadgindControls();
