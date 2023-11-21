export class StockUpdatedEvent {
  constructor(
    public id: string,
    public quantity: number,
  ) {}
}
