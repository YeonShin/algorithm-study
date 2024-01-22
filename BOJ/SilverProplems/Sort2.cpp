// Silver V Tier Problem : BOJ #2751

#include <iostream>
#include <vector>
#include <algorithm>

using namespace std;

bool cmp(int a, int b)
{
	return a < b;
}

int main()
{
	ios_base::sync_with_stdio(false);
	cin.tie(NULL);

	int N;
	int num;
	cin >> N;
	vector<int> v;
	for (int i = 0; i < N; i++)
	{
		cin >> num;
		v.push_back(num);
	}
	sort(v.begin(), v.end(), cmp);
	for (int i = 0; i < N; i++)
	{
		cout << v[i] << "\n";
	}
}
