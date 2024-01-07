import requests

def save_proxies_to_file(urls):
    with open("proxy.txt", "w") as file:
        for url in urls:
            response = requests.get(url)
            if response.status_code == 200:
                proxies = response.text.split('\r\n')[:-1]  # Loại bỏ phần tử cuối cùng (rỗng)
                for proxy in proxies:
                    file.write(proxy + "\n")

urls = [
    "https://api.proxyscrape.com/v2/?request=getproxies&protocol=http&timeout=10000&country=all&ssl=all&anonymity=all",
]

save_proxies_to_file(urls)