import { close } from 'inspector';

import { ArgumentParser } from 'argparse';
import Jasmine from 'jasmine';
import nodeWatch from 'node-watch';
import { install } from 'source-map-support';
import 'reflect-metadata';

install({
  hookRequire: true,
  environment: 'node',
});
const parser = new ArgumentParser();

parser.add_argument('-m', '--module', { action: 'append' });
parser.add_argument('-k', '--keep-alive', { action: 'store_true' });
const args = parser.parse_args();
const keepAlive = args.keep_alive;

const jasmineExecutor = new Jasmine({});

const jasmineConfig = {
  spec_dir: 'src',
  spec_files: [
    '**/*.spec.ts',
  ],
};

jasmineExecutor.loadConfig(jasmineConfig);
jasmine.DEFAULT_TIMEOUT_INTERVAL = 10000;

if (keepAlive) {
  jasmineExecutor.onComplete(() => {
    setInterval(() => {
    }, 10e6);
  });

  const watch = nodeWatch('./src', { recursive: true, filter: /\.ts$/ }, () => {
    watch.close();
    process.exit(0);
  });
}

jasmineExecutor.execute();

process.on('exit', () => {
  return close();
});
