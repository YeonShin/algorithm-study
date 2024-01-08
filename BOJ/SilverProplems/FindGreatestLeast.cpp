#include <iostream>

using namespace std;

int main() {
	int A, B;
	int greatest = 0, least = 0;
	int j = 2, k = 2;
	cin >> A >> B;
	int TempA = A, TempB = B;
	for (int i = 1; i <= (A <= B ? A : B); i++) {
		if (A % i == 0 && B % i == 0) {
			greatest = i;
		}
	}
	while (TempA != TempB) {
		if (TempA >= TempB) {
			TempB = B * j;
			j++;
		}
		else {
			TempA = A * k;
			k++;
		}
	}
	least = TempA;
	cout << greatest  << endl << least;
}