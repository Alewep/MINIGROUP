import re
import json
from unidecode import unidecode


def parse_mzn(path_file):
    data = {}
    with open(path_file, "r", encoding="utf-8") as file:
        content = unidecode(file.read())

    if content.startswith("%#n"):
        data["size"] = "n"

    elif content.startswith("%#"):
        start = content.find("#")
        end = content.find("\n")
        data["size"] = str(int(content[start + 1:end]))
        content = content[end + 1:]

    content = re.split(r';[\t\n]*\*/|;', content)
    are_constraint = [True if re.search(r"\n(/\*)?\t*(solve|constraint)", c) else False for c in content]
    head_end = are_constraint.index(True)
    start_foot = are_constraint[::-1].index(True)
    data["head"] = ";".join(content[:head_end]).strip() + ";"
    data["foot"] = ";".join(content[-start_foot:]).strip()

    constraints = [c.strip() for i, c in enumerate(content) if are_constraint[i]]

    del content
    del are_constraint

    data["constraints"] = []

    for i, c in enumerate(constraints):
        print(c.encode("utf-8"))
        comment = f"Contrainte {i}"
        activated = True
        if c.startswith("%"):
            end = c.find("\n")
            comment = c[1:end].strip()
            c = c[end + 1:].strip()

        if c.startswith("/*"):
            activated = False
            c = c[3:].strip()

        key = "constraint"
        if "solve" in c:
            key = "solve"

        c = c[c.find(key) + len(key):].strip()
        c = c.replace("\n", " ")
        c = re.sub(r"  +", " ", c)
        data["constraints"].append({
            "comment": comment,
            key: c,
            "activated": activated
        })

    return data


def to_mzn(data, activated):
    result = data["head"] + "\n"
    for i, c in enumerate(data["constraints"]):
        if len(activated) - 1 < i or activated[i]:
            key = "constraint"
            if "solve" in c:
                key = "solve"

            result += f"{key} {c[key]};\n"

    result += data["foot"]

    return result
