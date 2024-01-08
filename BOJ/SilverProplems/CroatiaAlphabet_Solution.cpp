#include <iostream>
#include <vector>
#include <string>

using namespace std;

int main() {
	vector <string> croatia = { "c=", "c-", "dz=", "d-", "lj", "nj", "s=", "z=" };
	string str;
	int idx;
	cin >> str;
	for (int i = 0; i < croatia.size(); i++) {
		while (1) {
			idx = str.find(croatia[i]); // find 함수를 통해 문자열에 찾는 문자가 없을 경우 string::npos를 반환한다는 사실을 기억
			if (idx == string::npos) {
				break;
			}
			str.replace(idx, croatia[i].length(), "#");
		}
	}
	cout << str.size();
}