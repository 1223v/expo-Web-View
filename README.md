# expo-Web-View
Web-View

Please downgrade node version 12.x

# node가 어디에 설치되어있는지 확인
whereis node

# node 관련 모든 경로 삭제
rm -rf /usr/bin/node
rm -rf /usr/include/node
rm -rf /usr/local/bin/node
rm -rf /usr/local/include/node
rm -rf /usr/share/man/man1/node*
rm -rf /usr/local/lib/node_modules/
rm -rf /usr/local/bin/npm
rm -rf ~/.npm
rm -rf ~/.node-gyp

# 노드 삭제
sudo apt remove nodejs -y

# 노드 설치https://www.simplified.guide/nodejs/install-in-ubuntu-latest
curl -fsSL https://deb.nodesource.com/setup_12.x | sudo -E bash -


sudo apt install -y nodejs


expo install react-native-webview

if return to error
npm install @react-native-community/viewpager --save

Please install expo-cli


npm install -g expo-cli


expo install expo-permissions
