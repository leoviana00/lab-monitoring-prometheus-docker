## Stress do Host

- Passe o comando abaixo no termnal repetidas vezes, acompanhe o processamento via htop ou outro do gênero.

```bash
sha1sum /dev/zero &
```
- Para finalizar o processo utilize o comando abaixo:

```bash
killall sha1sum
```

## Script para stress de CPU

- Passe a quantidade de processos como argumento, exemplo

```
bash stress_cpu.sh 200
```
