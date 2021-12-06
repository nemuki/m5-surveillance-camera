# M5 Surveillance Camera

> M5 Camera と人感センサーで作る監視カメラ

## 必要な物

- [Visual Studio Code](https://azure.microsoft.com/ja-jp/products/visual-studio-code/)
  - [Platform IO](https://marketplace.visualstudio.com/items?itemName=platformio.platformio-ide) 拡張機能

## セットアップ

- リポジトリをクローンし，Visual Studio Code で開く

```sh
git clone https://github.com/nemuki/m5-surveillance-camera.git
cd m5-surveillance-camera
code .
```

- `src/env.cpp` に以下を追加する

```cpp
#include "env.h"

char *wifi_ssid = "";
char *wifi_password = "";
String script_path = "/macros/s/.../exec";
```

- Platform IO でビルドする．
