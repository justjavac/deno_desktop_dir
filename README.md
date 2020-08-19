# deno_desktop_dir

[![tag](https://img.shields.io/github/release/justjavac/deno_desktop_dir)](https://github.com/justjavac/deno_desktop_dir/releases)
[![Build Status](https://github.com/justjavac/deno_desktop_dir/workflows/ci/badge.svg?branch=master)](https://github.com/justjavac/deno_desktop_dir/actions)
[![license](https://img.shields.io/github/license/justjavac/deno_desktop_dir)](https://github.com/justjavac/deno_desktop_dir/blob/master/LICENSE)
[![](https://img.shields.io/badge/deno-v1.3-green.svg)](https://github.com/denoland/deno)

Returns the path to the user's desktop directory.

The returned value depends on the operating system and is either a string,
containing a value from the following table, or `null`.

|Platform | Value                | Example                    |
| ------- | -------------------- | -------------------------- |
| Linux   | `XDG_DESKTOP_DIR`    | /home/justjavac/Desktop    |
| macOS   | `$HOME`/Desktop      | /Users/justjavac/Desktop   |
| Windows | `{FOLDERID_Desktop}` | C:\Users\justjavac\Desktop |

## Usage

Requires `allow-env` permission.

Returns `null` if there is no applicable directory or if any other error occurs.

```ts
import desktopDir from "https://deno.land/x/desktop_dir/mod.ts";

desktopDir();
// Lin: "/home/justjavac/Desktop"
// Mac: "/Users/justjavac/Desktop"
// Win: "C:\Users\justjavac\Desktop"
```

## License

[deno_desktop_dir](https://github.com/justjavac/deno_desktop_dir) is released under the MIT License. See the bundled [LICENSE](./LICENSE) file for details.
