using namespace std;

int main(int argc, char *argv[]){
    int nota;
    cout << "Dime tu nota:";
    cin >> nota;

    switch (nota){
    case 1:
    case 2:
    case 3:
    case 4:
        cout << "Suspenso";
        break;
    case 5:
        cout << "Suficiente";
        break;
    case 6:
    case 7:
        cout << "Bien";
        break;
    case 8:
        cout << "Notable";
        break;
    case 9:
    case 10:
        cout << "Sobresaliente";
        break;
    default:
        cout << "Nota incorrecta";
        break;
    }
    cout << endl << "Programa terminado";
    return 0;
}