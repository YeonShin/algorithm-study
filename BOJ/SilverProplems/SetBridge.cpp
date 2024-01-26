// Silver V Tier Problem : BOJ #1010

#include <iostream>

using namespace std;

int main() {
	int T;
	int N, M;
	cin >> T;
	for (int i = 0; i < T; i++) {
		long long result = 1;
		cin >> N >> M;
		int r = 1;
		for (int j = M; j > M - N; j--) {
			result = result * j;
			result = result / r;
			r++;
		}
		cout << result << "\n";
	}
	return 0;
}

// <풀이>
// N과 M의 범위를 고려했을 때 결과 값이 int 자료형에 저장될 시 오버플로우가 발생함에 따라
// long long 자료형을 사용하여야 한다는 것을 고려해야 하는 문제
// 팩토리얼을 사용해 조합을 계산하려 했으나 복잡했다.