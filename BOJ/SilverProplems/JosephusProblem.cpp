// Silver V Tier Problem : BOJ #11866

#include <iostream>
#include <queue>
using namespace std;

int main() {
	int N, K;
	int t = 0;
	cin >> N >> K;
	deque<int> li;
	for (int i = 1; i <= N; i++) {
		li.push_back(i);
	}
	auto iter = li.begin();
	cout << "<";
	while (li.size() != 0) {
		for (int i = 1; i < K; i++) {
			li.push_back(li.front());
			li.pop_front();
		}
		cout << li.front();
		if (li.size() > 1) {
			cout << ", ";
		}
		li.erase(li.begin());
	}
	cout << ">";

	return 0;
}

// <풀이>
// Queue 자료구조를 활용하여 해결 하는 문제
// Queue 말고 Linked List를 활용하여 해결하려 했지만, 실패
// Circular Linked List를 활용하여 해결할 수 도 있을 것 같으나, Queue 자료구조를 사용하는 것이 더 쉬울 것으로 보임