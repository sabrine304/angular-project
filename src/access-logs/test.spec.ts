import { Parser } from './parser';

describe('parse', () => {
  it('should parse simple and return one log', () => {
    const parser = new Parser('./src/access-logs/examples/sample.log');

    const logs = parser.parse();

    expect(logs.length).toBe(1);
  });
});
