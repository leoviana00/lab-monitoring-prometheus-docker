<h1 align="center">Monitoring - Stack Prometheus </h1>

<p align="center">
  <img alt="Prometheus" src="https://img.shields.io/static/v1?label=Prometheus&message=Alertmanager&color=8257E5&labelColor=000000"  />
  <img alt="Grafana" src="https://img.shields.io/static/v1?label=Grafana&message=Docker&color=8257E5&labelColor=000000"  />
  <img alt="License" src="https://img.shields.io/static/v1?label=license&message=MIT&color=49AA26&labelColor=000000">
</p>

<p align="center">
  <img alt="Prometheues" src="images/monitoring.png">
</p>

## 🌱 Project

- Laboratório para teste de monitoramento de host e containers com prometheus.

## ✨ Tecnologias

- Docker
- Prometheus
- Alertmanager
- Grafana
- Cadvisor
- Node Exporter

## 🛠️ Etapas serem feitas


1. [ ] Subir Prometheus 
    - [ ] Definir configuração do prometheus
2. [ ] Subir Grafana
    - [ ] Criar arquivo de configuração do datasouce para integração automática com o Prometheus
    - [ ] Criar arquivo de variáveis de ambiente para credenciais
    - [ ] Criar dashboard para visualizar metricas dos contêiners
    - [ ] Criar dashboard para visualizar metricas dos hosts
    - [ ] Criar dashboard para visualizar metricas dos targets
3. [ ] Subir Node Exporter para coletar métricas do Host
4. [ ] Subir Cadvisor para coletar métricas dos serviços contêinerizados
5. [ ] Subir alertmanager 
    - [ ] Setup Alertas
      - [ ] Criar regras de alertas para:
        - [ ] Services Targets
        - [ ] Host
        - [ ] Serviços Dockerizados
      - [ ] Receber notificação de alertas via Telegram
        - [ ] Criar token bot telegram e chat
        - [ ] Criar templates de notificação para envio de notificações

## ✨ Execução

- Adicionar `bot_token` e o `chat_id` no `./alertmanager/config.yml`

- SUbindo os serviços

```bash
docker-compose up -d
```

```console
    Name                  Command                  State                        Ports                  
-------------------------------------------------------------------------------------------------------
alertmanager   /bin/alertmanager --config ...   Up             0.0.0.0:9093->9093/tcp,:::9093->9093/tcp
app            /docker-entrypoint.sh ngin ...   Up             0.0.0.0:8081->80/tcp,:::8081->80/tcp    
cadvisor       /usr/bin/cadvisor -logtostderr   Up (healthy)   0.0.0.0:8080->8080/tcp,:::8080->8080/tcp
grafana        /run.sh                          Up             0.0.0.0:3000->3000/tcp,:::3000->3000/tcp
nodeexporter   /bin/node_exporter --path. ...   Up             0.0.0.0:9100->9100/tcp,:::9100->9100/tcp
prometheus     /bin/prometheus --config.f ...   Up             0.0.0.0:9090->9090/tcp,:::9090->9090/tcp
pushgateway    /bin/pushgateway                 Up             0.0.0.0:9091->9091/tcp,:::9091->9091/tcp
redis          docker-entrypoint.sh redis ...   Up             0.0.0.0:6379->6379/tcp,:::6379->6379/tcp
```

## 📊 Dashboards

- Prometheus

<p align="center">
  <img alt="Prometheues" src="images/prometheus_dashboard.png">
</p>

- Cadvisor

<p align="center">
  <img alt="Prometheues" src="images/cadvisor.png">
</p>

- Grafana - Monitoring Host

<p align="center">
  <img alt="Grafana" src="images/docker_host_dashboard.png">
</p>

- Grafana - Monitoring Docker

<p align="center">
  <img alt="Grafana" src="images/docker_container_dashboard.png">
</p>

- Grafana - Monitoring Services

<p align="center">
  <img alt="Grafana" src="images/monitor_service_dashboard.png">
</p>

## 🔥 Alertas

- Grafana - Alertas

<p align="center">
  <img alt="Grafana" src="images/dashboard_alertas.png">
</p>

- Prometheus - Alertas

<p align="center">
  <img alt="Grafana" src="images/dash_prometheus_alertas.png">
</p>

- Telegram - Alertas

<p align="center">
  <img alt="Grafana" src="images/telegra.png">
</p>

 
## 📄 Licença
Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 🙇 Referências