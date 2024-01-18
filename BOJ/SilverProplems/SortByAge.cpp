#include <iostream>
#include <vector>
#include <string>
#include <algorithm>

using namespace std;

bool compare(const pair<int, string>& a, const pair<int, string>& b) {
	return a.first < b.first;
}

int main() {
	int N;
	int age;
	string name;
	cin >> N;
	vector<pair<int, string>> info;

	for (int i = 0; i < N; i++) {
		cin >> age >> name;
		info.push_back(make_pair(age, name));
	}
	stable_sort(info.begin(), info.end(), compare);

	for (int i = 0; i < N; i++) {
		cout << info[i].first << " " << info[i].second << "\n";
	}

}

/*
일반 sort함수를 사용하지 않고 stable_sort를 사용해야 해결되는 문제였음
sort와 stable_sort의 차이점을 알아본 결과
stable_sort의 경우 안정 정렬을 보장한다는 점이 차이
정렬 했을 때 중복된 값들의 순서가 변하지 않으면 안정(stable)정렬이라고 일컫는다고 한다.
*/