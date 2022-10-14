#include <iostream>
#include <cstdlib>
#include <cmath>
using namespace std;

#define MAX 20

void input(int a[], int n)
{
    for (int i = 0; i < n; i++)
        a[i] = rand() % 10 + 1;
}

void output(int a[], int n)
{
    for (int i = 0; i < n; i++)
        cout << a[i] << " ";
    cout << endl;
}

int Riddle(int a[], int n)
{
    if (n == 1)
        return a[0];
    else
    {
        int temp = Riddle(a, n - 2);
        if (temp <= a[n-1])
            return temp;
        else
            return a[n-1];
    }
}

//2n = 2n−1 + 2n−1 và 2n = 2n-1.2, 
int math1(int n)
{
    return 2 * pow(2, n-1);
}

// an=an-1+ an-1
int math2(int a, int n)
{
    return pow(a, n-1) + pow(a, n-1);
}

int main()
{
    int a[MAX], n;
    cout << "Number of elements: ";
    cin >> n;
    input(a, n);
    output(a, n);
    // cout << Riddle(a, n);
    cout << "Math 1 result: " << math1(n);

    return 0;
}