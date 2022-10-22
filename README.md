Steps to reproduce:

```bash
my-machine:~/projects/bugs/vite-build-mikro$ npm run build

> my-app@0.0.1 build
> vite build

vite v3.1.8 building for production...
✓ 63 modules transformed.
vite v3.1.8 building SSR bundle for production...
transforming (57) node_modules/@sveltejs/kit/src/utils/functions.js"confetti" is imported from external module "@neoconfetti/svelte" but never used in "src/routes/sverdle/+page.svelte".
✓ 71 modules transformed.
Generated an empty chunk: "hooks"
.svelte-kit/output/server/vite-manifest.json                                  4.01 KiB
.svelte-kit/output/server/index.js                                            68.83 KiB
.svelte-kit/output/server/entries/pages/_layout.svelte.js                     4.39 KiB
.svelte-kit/output/server/entries/fallbacks/error.svelte.js                   0.60 KiB
.svelte-kit/output/server/entries/pages/_page.svelte.js                       7.42 KiB
.svelte-kit/output/server/entries/pages/_page.ts.js                           0.05 KiB
.svelte-kit/output/server/entries/pages/_page.server.ts.js                    0.74 KiB
.svelte-kit/output/server/entries/pages/about/_page.svelte.js                 1.06 KiB
.svelte-kit/output/server/entries/pages/about/_page.ts.js                     0.13 KiB
.svelte-kit/output/server/entries/pages/sverdle/_page.svelte.js               7.40 KiB
.svelte-kit/output/server/entries/pages/sverdle/_page.server.ts.js            141.76 KiB
.svelte-kit/output/server/entries/pages/sverdle/how-to-play/_page.svelte.js   2.63 KiB
.svelte-kit/output/server/entries/pages/sverdle/how-to-play/_page.ts.js       0.13 KiB
.svelte-kit/output/server/chunks/index.js                                     4.29 KiB
.svelte-kit/output/server/chunks/index2.js                                    1.06 KiB
.svelte-kit/output/server/chunks/index3.js                                    1.29 KiB
.svelte-kit/output/server/chunks/stores.js                                    1.00 KiB
.svelte-kit/output/server/chunks/environment.js                               0.04 KiB
.svelte-kit/output/server/chunks/hooks.js                                     0.00 KiB

Run npm run preview to preview your production build locally.
.svelte-kit/output/client/_app/immutable/assets/svelte-welcome-c18bcf5a.webp                             112.76 KiB
.svelte-kit/output/client/_app/immutable/assets/svelte-welcome-6c300099.png                              352.35 KiB
.svelte-kit/output/client/_app/immutable/assets/github-1ea8d62e.svg                                      1.71 KiB
.svelte-kit/output/client/_app/immutable/assets/svelte-logo-87df40b8.svg                                 1.85 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-cyrillic-ext-400-normal-3df7909e.woff2         15.40 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-cyrillic-400-normal-c7d433fd.woff2             8.89 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-greek-ext-400-normal-9e2fe623.woff2            7.33 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-greek-400-normal-a8be01ce.woff2                10.27 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-latin-ext-400-normal-6bfabd30.woff2            11.10 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-latin-400-normal-e43b3538.woff2                15.90 KiB
.svelte-kit/output/client/_app/immutable/assets/fira-mono-all-400-normal-1e3b098c.woff                   75.55 KiB
.svelte-kit/output/client/vite-manifest.json                                                             9.26 KiB
.svelte-kit/output/client/_app/immutable/components/error.svelte-a4bb10d6.js                             1.54 KiB / gzip: 0.71 KiB
.svelte-kit/output/client/_app/immutable/components/pages/about/_page.svelte-b1c831e3.js                 2.43 KiB / gzip: 1.10 KiB
.svelte-kit/output/client/_app/immutable/modules/pages/_page.ts-e9fa0128.js                              0.07 KiB / gzip: 0.08 KiB
.svelte-kit/output/client/_app/immutable/components/pages/_page.svelte-607c8b2b.js                       5.75 KiB / gzip: 2.58 KiB
.svelte-kit/output/client/_app/immutable/modules/pages/about/_page.ts-dd7f9414.js                        0.14 KiB / gzip: 0.12 KiB
.svelte-kit/output/client/_app/immutable/components/pages/_layout.svelte-18303948.js                     4.80 KiB / gzip: 1.85 KiB
.svelte-kit/output/client/_app/immutable/modules/pages/sverdle/how-to-play/_page.ts-9ea359b6.js          0.14 KiB / gzip: 0.12 KiB
.svelte-kit/output/client/_app/immutable/components/pages/sverdle/how-to-play/_page.svelte-8ce8a75e.js   4.87 KiB / gzip: 1.81 KiB
.svelte-kit/output/client/_app/immutable/chunks/singletons-6e84bdac.js                                   1.45 KiB / gzip: 0.81 KiB
.svelte-kit/output/client/_app/immutable/chunks/index-480ed5d9.js                                        0.43 KiB / gzip: 0.31 KiB
.svelte-kit/output/client/_app/immutable/components/pages/sverdle/_page.svelte-59822499.js               13.58 KiB / gzip: 5.50 KiB
.svelte-kit/output/client/_app/immutable/chunks/_page-802cc2a3.js                                        0.14 KiB / gzip: 0.14 KiB
.svelte-kit/output/client/_app/immutable/chunks/stores-d267a4c5.js                                       0.61 KiB / gzip: 0.35 KiB
.svelte-kit/output/client/_app/immutable/chunks/_page-cdc946a0.js                                        0.20 KiB / gzip: 0.18 KiB
.svelte-kit/output/client/_app/immutable/chunks/environment-b04a8a58.js                                  0.03 KiB / gzip: 0.05 KiB
.svelte-kit/output/client/_app/immutable/chunks/index-ecd42337.js                                        7.96 KiB / gzip: 3.26 KiB
.svelte-kit/output/client/_app/immutable/chunks/_page-0d81434c.js                                        0.20 KiB / gzip: 0.18 KiB
.svelte-kit/output/client/_app/immutable/chunks/0-7abc0f89.js                                            0.09 KiB / gzip: 0.10 KiB
.svelte-kit/output/client/_app/immutable/chunks/1-df6cfc63.js                                            0.09 KiB / gzip: 0.09 KiB
.svelte-kit/output/client/_app/immutable/chunks/3-743594ce.js                                            0.15 KiB / gzip: 0.13 KiB
.svelte-kit/output/client/_app/immutable/chunks/2-21df5d44.js                                            0.17 KiB / gzip: 0.14 KiB
.svelte-kit/output/client/_app/immutable/chunks/5-dfcc15ea.js                                            0.16 KiB / gzip: 0.14 KiB
.svelte-kit/output/client/_app/immutable/chunks/4-3de850f8.js                                            0.12 KiB / gzip: 0.12 KiB
.svelte-kit/output/client/_app/immutable/start-a56121ec.js                                               25.60 KiB / gzip: 9.89 KiB
.svelte-kit/output/client/_app/immutable/assets/_page-265a38f0.css                                       1.41 KiB / gzip: 0.51 KiB
.svelte-kit/output/client/_app/immutable/assets/_page-adbe83f1.css                                       0.78 KiB / gzip: 0.34 KiB
.svelte-kit/output/client/_app/immutable/assets/_page-b7948a4c.css                                       3.79 KiB / gzip: 1.06 KiB
.svelte-kit/output/client/_app/immutable/assets/_layout-58b7efb3.css                                     4.89 KiB / gzip: 1.54 KiB

> Using @sveltejs/adapter-netlify
✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/errors.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/seeder"

    node_modules/@mikro-orm/core/MikroORM.js:143:40:
      143 │         const { SeedManager } = require('@mikro-orm/seeder');
          ╵                                         ~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/seeder" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/types/EnumArrayType.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "async_hooks"

    node_modules/@mikro-orm/core/utils/TransactionContext.js:4:30:
      4 │ const async_hooks_1 = require("async_hooks");
        ╵                               ~~~~~~~~~~~~~

  The package "async_hooks" wasn't found on the file system but is built into node. Are you trying
  to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/entity/EntityHelper.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "url"

    node_modules/@mikro-orm/core/connections/Connection.js:4:22:
      4 │ const url_1 = require("url");
        ╵                       ~~~~~

  The package "url" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "async_hooks"

    node_modules/@mikro-orm/core/utils/RequestContext.js:4:30:
      4 │ const async_hooks_1 = require("async_hooks");
        ╵                               ~~~~~~~~~~~~~

  The package "async_hooks" wasn't found on the file system but is built into node. Are you trying
  to bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/@mikro-orm/core/utils/ConfigurationLoader.js:9:23:
      9 │ const path_1 = require("path");
        ╵                        ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/EntityManager.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "os"

    node_modules/@mikro-orm/core/utils/ConfigurationLoader.js:10:21:
      10 │ const os_1 = require("os");
         ╵                      ~~~~

  The package "os" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/utils/Configuration.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/entity/ArrayCollection.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "url"

    node_modules/@mikro-orm/core/utils/ConfigurationLoader.js:11:22:
      11 │ const url_1 = require("url");
         ╵                       ~~~~~

  The package "url" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/entity/EntityAssigner.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/core/entity/WrappedEntity.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/mongodb"

    node_modules/@mikro-orm/core/utils/Configuration.js:285:63:
      285 │     'mongo': { className: 'MongoDriver', module: () => require('@mikro-orm/mongodb') },
          ╵                                                                ~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/mongodb" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "events"

    node_modules/@mikro-orm/core/utils/clone.js:9:25:
      9 │ const events_1 = require("events");
        ╵                          ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/empty/index.js:5:21:
      5 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/globby/index.js:2:19:
      2 │ const fs = require('fs');
        ╵                    ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/mysql"

    node_modules/@mikro-orm/core/utils/Configuration.js:286:63:
      286 │     'mysql': { className: 'MySqlDriver', module: () => require('@mikro-orm/mysql') },
          ╵                                                                ~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/mysql" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "module"

    node_modules/@mikro-orm/core/utils/Utils.js:7:25:
      7 │ const module_1 = require("module");
        ╵                          ~~~~~~~~

  The package "module" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/graceful-fs/graceful-fs.js:1:17:
      1 │ var fs = require('fs')
        ╵                  ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/move/move.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/dotenv/lib/main.js:1:19:
      1 │ const fs = require('fs')
        ╵                    ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/@mikro-orm/core/metadata/MetadataDiscovery.js:7:23:
      7 │ const path_1 = require("path");
        ╵                        ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/dotenv/lib/main.js:2:21:
      2 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/@mikro-orm/core/utils/Utils.js:9:23:
      9 │ const path_1 = require("path");
        ╵                        ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/graceful-fs/graceful-fs.js:6:19:
      6 │ var util = require('util')
        ╵                    ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "assert"

    node_modules/graceful-fs/graceful-fs.js:87:14:
      87 │       require('assert').equal(fs[gracefulQueue].length, 0)
         ╵               ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/jsonfile/index.js:5:16:
      5 │   _fs = require('fs')
        ╵                 ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/copy/copy-sync.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "os"

    node_modules/dotenv/lib/main.js:3:19:
      3 │ const os = require('os')
        ╵                    ~~~~

  The package "os" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/util/stat.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/graceful-fs/legacy-streams.js:1:21:
      1 │ var Stream = require('stream').Stream
        ╵                      ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/fs-extra/lib/util/stat.js:5:21:
      5 │ const util = require('util')
        ╵                      ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/copy/copy.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "constants"

    node_modules/graceful-fs/polyfills.js:1:24:
      1 │ var constants = require('constants')
        ╵                         ~~~~~~~~~~~

  The package "constants" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/ensure/symlink.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/mariadb"

    node_modules/@mikro-orm/core/utils/Configuration.js:287:67:
      287 │     'mariadb': { className: 'MariaDbDriver', module: () => require('@mikro-orm/mariadb') },
          ╵                                                                    ~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/mariadb" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/mkdirs/utils.js:7:21:
      7 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/remove/rimraf.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/ensure/file.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/ensure/link.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "os"

    node_modules/@mikro-orm/core/utils/Utils.js:10:21:
      10 │ const os_1 = require("os");
         ╵                      ~~~~

  The package "os" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/move/move-sync.js:4:21:
      4 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/sqlite"

    node_modules/@mikro-orm/core/utils/Configuration.js:289:65:
      289 │     'sqlite': { className: 'SqliteDriver', module: () => require('@mikro-orm/sqlite') },
          ╵                                                                  ~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/sqlite" as external to exclude it from the bundle, which will
  remove this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "path"

    node_modules/dir-glob/index.js:2:21:
      2 │ const path = require('path');
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/better-sqlite"

    node_modules/@mikro-orm/core/utils/Configuration.js:290:78:
      290 │     'better-sqlite': { className: 'BetterSqliteDriver', module: () => require('@mikro-orm/better-sqlite') },
          ╵                                                                               ~~~~~~~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/better-sqlite" as external to exclude it from the bundle, which
  will remove this error. You can also surround this "require" call with a try/catch block to handle
  this failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "assert"

    node_modules/fs-extra/lib/remove/rimraf.js:5:23:
      5 │ const assert = require('assert')
        ╵                        ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/merge2/index.js:9:23:
      9 │ const Stream = require('stream')
        ╵                        ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/globby/stream-utils.js:2:28:
      2 │ const {Transform} = require('stream');
        ╵                             ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/globby/gitignore.js:2:28:
      2 │ const {promisify} = require('util');
        ╵                             ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/globby/gitignore.js:3:19:
      3 │ const fs = require('fs');
        ╵                    ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/globby/gitignore.js:4:21:
      4 │ const path = require('path');
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/output-file/index.js:5:21:
      5 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/fast-glob/out/providers/stream.js:3:25:
      3 │ const stream_1 = require("stream");
        │                          ~~~~~~~~
        ╵                          "./stream"

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/fast-glob/out/settings.js:4:19:
      4 │ const fs = require("fs");
        ╵                    ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fs-extra/lib/ensure/symlink-paths.js:3:21:
      3 │ const path = require('path')
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "os"

    node_modules/fast-glob/out/settings.js:5:19:
      5 │ const os = require("os");
        ╵                    ~~~~

  The package "os" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/fast-glob/out/readers/stream.js:3:25:
      3 │ const stream_1 = require("stream");
        │                          ~~~~~~~~
        ╵                          "./stream"

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/@nodelib/fs.walk/out/settings.js:3:21:
      3 │ const path = require("path");
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/@nodelib/fs.scandir/out/settings.js:3:21:
      3 │ const path = require("path");
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/@nodelib/fs.scandir/out/adapters/fs.js:4:19:
      4 │ const fs = require("fs");
        │                    ~~~~
        ╵                    "./fs"

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fast-glob/out/providers/provider.js:3:21:
      3 │ const path = require("path");
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/@nodelib/fs.walk/out/readers/async.js:3:25:
      3 │ const events_1 = require("events");
        ╵                          ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/path-type/index.js:2:28:
      2 │ const {promisify} = require('util');
        ╵                             ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/path-type/index.js:3:19:
      3 │ const fs = require('fs');
        ╵                    ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fast-glob/out/readers/reader.js:3:21:
      3 │ const path = require("path");
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "url"

    node_modules/@mikro-orm/core/utils/Utils.js:11:22:
      11 │ const url_1 = require("url");
         ╵                       ~~~~~

  The package "url" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "crypto"

    node_modules/@mikro-orm/core/utils/Utils.js:13:25:
      13 │ const crypto_1 = require("crypto");
         ╵                          ~~~~~~~~

  The package "crypto" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/@nodelib/fs.walk/out/providers/stream.js:3:25:
      3 │ const stream_1 = require("stream");
        │                          ~~~~~~~~
        ╵                          "./stream"

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fast-glob/out/utils/pattern.js:4:21:
      4 │ const path = require("path");
        │                      ~~~~~~
        ╵                      "./path"

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fast-glob/out/utils/path.js:4:21:
      4 │ const path = require("path");
        │                      ~~~~~~
        ╵                      "./path"

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/@nodelib/fs.stat/out/adapters/fs.js:4:19:
      4 │ const fs = require("fs");
        │                    ~~~~
        ╵                    "./fs"

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/fast-glob/node_modules/glob-parent/index.js:4:31:
      4 │ var pathPosixDirname = require('path').posix.dirname;
        ╵                                ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "os"

    node_modules/fast-glob/node_modules/glob-parent/index.js:5:22:
      5 │ var isWin32 = require('os').platform() === 'win32';
        ╵                       ~~~~

  The package "os" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/knex/query/CriteriaNode.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/entity-generator"

    node_modules/@mikro-orm/knex/AbstractSqlPlatform.js:27:44:
      27 │         const { EntityGenerator } = require('@mikro-orm/entity-generator');
         ╵                                             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/entity-generator" as external to exclude it from the bundle,
  which will remove this error. You can also surround this "require" call with a try/catch block to
  handle this failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "util"

    node_modules/micromatch/index.js:3:21:
      3 │ const util = require('util');
        ╵                      ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "@mikro-orm/migrations"

    node_modules/@mikro-orm/knex/AbstractSqlPlatform.js:32:37:
      32 │         const { Migrator } = require('@mikro-orm/migrations');
         ╵                                      ~~~~~~~~~~~~~~~~~~~~~~~

  You can mark the path "@mikro-orm/migrations" as external to exclude it from the bundle, which
  will remove this error. You can also surround this "require" call with a try/catch block to handle
  this failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/knex-builder/make-knex.js:1:33:
      1 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/knex/query/QueryBuilderHelper.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/@mikro-orm/knex/schema/SchemaComparator.js:4:23:
      4 │ const util_1 = require("util");
        ╵                        ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg/lib/client.js:3:27:
      3 │ var EventEmitter = require('events').EventEmitter
        ╵                            ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/picomatch/lib/picomatch.js:3:21:
      3 │ const path = require('path');
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/pg/lib/client.js:4:19:
      4 │ var util = require('util')
        ╵                    ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/schema/builder.js:1:33:
      1 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/builder-interface-augmenter.js:3:32:
      3 │ const { callbackify } = require('util');
        ╵                                 ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/picomatch/lib/utils.js:3:21:
      3 │ const path = require('path');
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/client.js:2:33:
      2 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/dialects/mysql/index.js:5:30:
      5 │ const { promisify } = require('util');
        ╵                               ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "assert"

    node_modules/pg-protocol/dist/parser.js:9:41:
      9 │ const assert_1 = __importDefault(require("assert"));
        ╵                                          ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "url"

    node_modules/pg-connection-string/index.js:3:18:
      3 │ var url = require('url')
        ╵                   ~~~~~

  The package "url" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/execution/transaction.js:3:33:
      3 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/fill-range/index.js:10:21:
      10 │ const util = require('util');
         ╵                      ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/pg-connection-string/index.js:4:17:
      4 │ var fs = require('fs')
        ╵                  ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg-pool/index.js:2:29:
      2 │ const EventEmitter = require('events').EventEmitter
        ╵                              ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "net"

    node_modules/pg/lib/connection.js:3:18:
      3 │ var net = require('net')
        ╵                   ~~~~~

  The package "net" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/picomatch/lib/constants.js:3:21:
      3 │ const path = require('path');
        ╵                      ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/client.js:3:30:
      3 │ const { promisify } = require('util');
        ╵                               ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "assert"

    node_modules/knex/lib/query/querybuilder.js:3:23:
      3 │ const assert = require('assert');
        ╵                        ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/execution/transaction.js:6:32:
      6 │ const { callbackify } = require('util');
        ╵                                 ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "pg-native"

    node_modules/pg/lib/native/client.js:4:21:
      4 │ var Native = require('pg-native')
        ╵                      ~~~~~~~~~~~

  You can mark the path "pg-native" as external to exclude it from the bundle, which will remove
  this error. You can also surround this "require" call with a try/catch block to handle this
  failure at run-time instead of bundle-time.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/query/querybuilder.js:4:33:
      4 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/dialects/sqlite3/index.js:5:30:
      5 │ const { promisify } = require('util');
        ╵                               ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg/lib/connection.js:4:27:
      4 │ var EventEmitter = require('events').EventEmitter
        ╵                            ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg/lib/native/client.js:7:27:
      7 │ var EventEmitter = require('events').EventEmitter
        ╵                            ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg/lib/query.js:3:33:
      3 │ const { EventEmitter } = require('events')
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "crypto"

    node_modules/pg/lib/utils.js:3:23:
      3 │ const crypto = require('crypto')
        ╵                        ~~~~~~~~

  The package "crypto" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/pg/lib/native/client.js:8:19:
      8 │ var util = require('util')
        ╵                    ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/pgpass/lib/index.js:3:19:
      3 │ var path = require('path')
        ╵                    ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "fs"

    node_modules/pgpass/lib/index.js:4:17:
      4 │   , fs = require('fs')
        ╵                  ~~~~

  The package "fs" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/pg/lib/native/query.js:3:27:
      3 │ var EventEmitter = require('events').EventEmitter
        ╵                            ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/pg/lib/native/query.js:4:19:
      4 │ var util = require('util')
        ╵                    ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "dns"

    node_modules/pg/lib/connection-parameters.js:3:18:
      3 │ var dns = require('dns')
        ╵                   ~~~~~

  The package "dns" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "tls"

    node_modules/pg/lib/connection.js:77:24:
      77 │       var tls = require('tls')
         ╵                         ~~~~~

  The package "tls" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "crypto"

    node_modules/pg/lib/sasl.js:2:23:
      2 │ const crypto = require('crypto')
        ╵                        ~~~~~~~~

  The package "crypto" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "path"

    node_modules/pgpass/lib/helper.js:3:19:
      3 │ var path = require('path')
        ╵                    ~~~~~~

  The package "path" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/knex/lib/raw.js:3:33:
      3 │ const { EventEmitter } = require('events');
        ╵                                  ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/dialects/postgres/index.js:5:30:
      5 │ const { promisify } = require('util');
        ╵                               ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "crypto"

    node_modules/knex/lib/dialects/oracle/utils.js:2:25:
      2 │   const crypto = require('crypto');
        ╵                          ~~~~~~~~

  The package "crypto" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/pgpass/lib/helper.js:4:21:
      4 │   , Stream = require('stream').Stream
        ╵                      ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/pgpass/lib/helper.js:6:19:
      6 │   , util = require('util')
        ╵                    ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/split2/index.js:19:30:
      19 │ const { Transform } = require('stream')
         ╵                               ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/dialects/oracledb/utils.js:2:30:
      2 │ const { promisify } = require('util');
        ╵                               ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "buffer"

    node_modules/safe-buffer/index.js:3:21:
      3 │ var buffer = require('buffer')
        ╵                      ~~~~~~~~

  The package "buffer" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "assert"

    node_modules/knex/lib/query/analytic.js:1:23:
      1 │ const assert = require('assert');
        ╵                        ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/knex/lib/dialects/oracledb/utils.js:3:23:
      3 │ const stream = require('stream');
        ╵                        ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "assert"

    node_modules/knex/lib/query/joinclause.js:1:23:
      1 │ const assert = require('assert');
        ╵                        ~~~~~~~~

  The package "assert" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "util"

    node_modules/knex/lib/logger.js:2:28:
      2 │ const { inspect } = require('util');
        ╵                             ~~~~~~

  The package "util" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "stream"

    node_modules/knex/lib/execution/runner.js:61:37:
      61 │     Transform = Transform || require('stream').Transform;
         ╵                                      ~~~~~~~~

  The package "stream" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "tty"

    node_modules/colorette/index.cjs:5:18:
      5 │ var tty = require('tty');
        ╵                   ~~~~~

  The package "tty" wasn't found on the file system but is built into node. Are you trying to bundle
  for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "events"

    node_modules/tarn/dist/Pool.js:6:25:
      6 │ const events_1 = require("events");
        ╵                          ~~~~~~~~

  The package "events" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

✘ [ERROR] Could not resolve "timers"

    node_modules/tarn/dist/Pool.js:7:25:
      7 │ const timers_1 = require("timers");
        ╵                          ~~~~~~~~

  The package "timers" wasn't found on the file system but is built into node. Are you trying to
  bundle for node? You can use "platform: 'node'" to do that, which will remove this error.

error during build:
Error: Build failed with 134 errors:
node_modules/@mikro-orm/core/EntityManager.js:4:23: ERROR: Could not resolve "util"
node_modules/@mikro-orm/core/MikroORM.js:143:40: ERROR: Could not resolve "@mikro-orm/seeder"
node_modules/@mikro-orm/core/connections/Connection.js:4:22: ERROR: Could not resolve "url"
node_modules/@mikro-orm/core/entity/ArrayCollection.js:4:23: ERROR: Could not resolve "util"
node_modules/@mikro-orm/core/entity/EntityAssigner.js:4:23: ERROR: Could not resolve "util"
...
    at failureErrorWithLog (/home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:1566:15)
    at /home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:1024:28
    at /home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:969:67
    at buildResponseToResult (/home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:1022:7)
    at /home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:1134:14
    at responseCallbacks.<computed> (/home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:671:9)
    at handleIncomingPacket (/home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:726:9)
    at Socket.readFromStdout (/home/my-machine/projects/bugs/vite-build-mikro/node_modules/esbuild/lib/main.js:647:7)
    at Socket.emit (node:events:513:28)
    at addChunk (node:internal/streams/readable:324:12)
my-machine:~/projects/bugs/vite-build-mikro$ 


```