import { performance } from 'perf_hooks';

import { CriteriaService } from './criteria.service';

describe('do not modify', () => {
  describe('process', () => {
    it('should process the first sample', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const result = await criteriaService.process('./criteria.json');

      const names = ['Warcraft 3', 'Age of Empire 2'];

      expect(result.length).toBe(2);
      expect(names.includes(result[0].name)).toBeTrue();
      expect(names.includes(result[1].name)).toBeTrue();
    });

    it('should process the second sample', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const result = await criteriaService.process('./criteria2.json');

      const names = ['Final Fantasy 10'];

      expect(result.length).toBe(1);
      expect(names.includes(result[0].name)).toBeTrue();
    });
  });

  describe('getGenre', () => {
    it('should retrieve the genre after X seconds', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const beforeCall = performance.now();

      await criteriaService.getGenre(0);

      const elapsedTime = (performance.now() - beforeCall) / 1000;

      expect(elapsedTime).toBeGreaterThanOrEqual(0.05);
      expect(elapsedTime).toBeLessThanOrEqual(1);
    });
  });

  describe('getYear', () => {
    it('should retrieve the year after X seconds', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const beforeCall = performance.now();

      await criteriaService.getYear(0);

      const elapsedTime = (performance.now() - beforeCall) / 1000;

      expect(elapsedTime).toBeGreaterThanOrEqual(0.05);
      expect(elapsedTime).toBeLessThanOrEqual(1);
    });
  });

  describe('getPlatforms', () => {
    it('should retrieve the platforms after X seconds', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const beforeCall = performance.now();

      await criteriaService.getPlatforms(0);

      const elapsedTime = (performance.now() - beforeCall) / 1000;

      expect(elapsedTime).toBeGreaterThanOrEqual(0.1);
      expect(elapsedTime).toBeLessThanOrEqual(1);
    });
  });

  describe('hasExpansion', () => {
    it('should retrieve if it has an expansion after X seconds', async () => {
      const criteriaService = new CriteriaService('./data.sample.json');

      const beforeCall = performance.now();

      await criteriaService.hasExpansion(0);

      const elapsedTime = (performance.now() - beforeCall) / 1000;

      expect(elapsedTime).toBeGreaterThanOrEqual(0.1);
      expect(elapsedTime).toBeLessThanOrEqual(1);
    });
  });
});
