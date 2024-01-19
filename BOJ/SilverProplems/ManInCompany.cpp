// Silver V Tier Problem : BOJ #7785

#include <iostream>
#include <set>
#include <algorithm>

using namespace std;

int main() {
	int n;
	string name;
	string commute;
	set<string, greater<string>> list;
	cin >> n;
	for (int i = 0; i < n; i++) {
		cin >> name >> commute;
		if (commute == "enter") {
			list.insert(name);
		}
		else if (commute == "leave") {
			list.erase(name); 
		}
	}
	for (auto iter = list.begin(); iter != list.end(); iter++) {
		cout << *iter << "\n";
	}
}

/* 
	set or map 컨테이너 사용하여 해결하는 문제 
	+ 더 빠른 시간에 해결할 수 있는 해결 방법은 없을까?
*/