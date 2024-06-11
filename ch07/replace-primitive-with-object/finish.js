class Order {
  constructor(data) {
    this._priority = data.priority;
  }

  get priority() {
    return this._priority;
  }
  get priorityString() {
    return this._priority.toString();
  }
  set priority(aString) {
    this._priority = aString;
  }
}

class Priority {
  constructor(value) {
    if (Priority.legalValues().includes(value)) {
      this._value = value;
    } else {
      throw new Error("Invalid for Priority");
    }
  }
  toString() {
    return this._value;
  }

  get _index() {
    return Priority.legalValues().findIndex((s) => s === this._value);
  }
  static legalValues() {
    return ["low", "normal", "high", "rush"];
  }
  higherThan(other) {
    return this._index > other._index;
  }
}

highPriorityCount = orders.filter((o) =>
  o.priority.higherThan(new Priority("normal"))
).length;
