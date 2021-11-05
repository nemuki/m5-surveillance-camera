# M5 Surveillance Camera

> M5 Cameraと人感センサーで作る監視カメラ

## 必要な物

- Visual Studio Code
  - Platform IO 拡張機能

## セットアップ

- リポジトリをクローンし，Visual Studio Codeで開く

```sh
git clone https://github.com/nemuki/m5-surveillance-camera.git
cd m5-surveillance-camera.git
code .
```

- `src/Wi-Fi.cpp` に以下を追加する

```cpp
#include "WiFi.h"

char *wifi_ssid = "";
char *wifi_password = "";
String myScript = "";
```

- Platform IOでビルドする．