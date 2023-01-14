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


## Instalando o stress

- Isntalando o stress

```bash
sudo apt install stress
```

## Teste de stress para CPU

- Para fazer o teste de estresse para cpu, precisamos saber quanto cpu em nossa máquina e faça o teste de estresse (exemplo com 2 núcleos) e o teste de estresse será feito em 120 segundos.

```bash
stress --cpu 2 --timeout 120
```

- Parâmetros de Stress CPU:

```console
 -c :: Cria tasks para o número informados de CPUs  
 -c 1k :: Cria 1024 processos para a CPU  
 -t 20s :: Cria um teste de 20 processos que irá durar 20 segundos ativo  
 ```

## Teste de estresse para RAM

- Para testar a memória precisamos definir o quanto vamos encher de memória e quanto é. se você tiver 4 Gb de ram, poderá preenchê- 1024M * 4lo, exemplo:

```bash
stress --vm 4 --vm-bytes 1024M
```

- Parâmetro de Stress de Memória:

```console
-vm 2 :: Cria 2 processos que irão alocar a memória do servidor  
-vm 2 --vm-bytes 128M :: Cria dois processos que irão alocar 128 cada um no CPU  
-vm 2 -t 10s :: cria dois processos que irão alocar a memória do servidor e o teste irá durar 10 segundos  
```