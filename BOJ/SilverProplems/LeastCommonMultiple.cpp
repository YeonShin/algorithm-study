// Silver V Tier Problem : BOJ #13241

#include <iostream>

using namespace std;

long long int gcd(long long int a, long long int b) {
	if (b == 0) {
		return a;
	}
	else {
		return gcd(b, a % b);
	}
}

int main() {
	long long int A, B;

	cin >> A >> B;
	cout << (A * B) / gcd(A, B);

	return 0;
}

// < 풀이 >
// 유클리드 호재법을 이용한 최소 공배수를 구하는 문제
// Brute Force 방식으로 최소공배수를 구하면 시간복잡도는 O(n)으로 느리다
// x, y의 최대 공약수는 x % y의 값을 r이라고 했을 때  y, r의 최대 공약수와 같다는 원리의 
// 유클리드 호재법을 이용. 이는 재귀 방식으로 구현할 수 있다. 
// 최소 공배수는 두 x, y의 곱 나누기 x, y의 최대공약수 공식을 통해 구할 수 있다
// 유클리드 호재법을 사용하면 O(log N)의 시간 복잡도를 가지므로, 더 효율적이다