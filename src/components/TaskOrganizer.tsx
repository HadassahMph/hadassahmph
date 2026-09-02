import { useEffect, useState } from "react";
import { Trash2, Plus } from "lucide-react";

const CATEGORIES = ["Data Project", "Learning", "Productivity", "General"] as const;
type Category = (typeof CATEGORIES)[number];

type Task = {
  id: string;
  title: string;
  category: Category;
  done: boolean;
};

const STORAGE_KEY = "hm-portfolio-tasks";

export function TaskOrganizer() {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [loaded, setLoaded] = useState(false);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState<Category>("Data Project");
  const [filter, setFilter] = useState<"All" | Category>("All");

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      if (raw) setTasks(JSON.parse(raw) as Task[]);
    } catch {
      /* ignore */
    }
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (!loaded) return;
    localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  }, [tasks, loaded]);

  const addTask = () => {
    const value = title.trim();
    if (!value) return;
    setTasks((prev) => [
      { id: crypto.randomUUID(), title: value, category, done: false },
      ...prev,
    ]);
    setTitle("");
  };

  const visible = filter === "All" ? tasks : tasks.filter((t) => t.category === filter);

  return (
    <div className="rounded-3xl border border-border bg-background p-5 shadow-soft sm:p-8">
      <div className="grid gap-3 sm:grid-cols-[minmax(0,1fr)_auto_auto]">
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && addTask()}
          placeholder="What needs to get done?"
          aria-label="Task title"
          className="min-w-0 rounded-full border border-border bg-card px-5 py-3 text-sm text-foreground outline-none placeholder:text-muted-foreground focus:border-primary"
        />
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value as Category)}
          aria-label="Task category"
          className="rounded-full border border-border bg-card px-4 py-3 text-sm text-foreground outline-none focus:border-primary"
        >
          {CATEGORIES.map((c) => (
            <option key={c} value={c}>
              {c}
            </option>
          ))}
        </select>
        <button
          onClick={addTask}
          className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/85"
        >
          <Plus className="h-4 w-4 shrink-0" />
          Add Task
        </button>
      </div>

      <div className="mt-6 flex flex-wrap gap-2">
        {(["All", ...CATEGORIES] as const).map((c) => (
          <button
            key={c}
            onClick={() => setFilter(c)}
            className={
              "rounded-full border px-4 py-1.5 text-xs font-medium transition-colors " +
              (filter === c
                ? "border-primary bg-primary text-primary-foreground"
                : "border-border bg-card text-muted-foreground hover:border-primary/40")
            }
          >
            {c}
          </button>
        ))}
      </div>

      <ul className="mt-6 space-y-3">
        {visible.length === 0 && (
          <li className="rounded-2xl border border-dashed border-border px-5 py-10 text-center text-sm text-muted-foreground">
            No tasks here yet — add one above.
          </li>
        )}
        {visible.map((task) => (
          <li
            key={task.id}
            className={
              "grid grid-cols-[auto_minmax(0,1fr)_auto] items-center gap-3 rounded-2xl border border-border bg-card px-4 py-3 transition-opacity " +
              (task.done ? "opacity-50" : "")
            }
          >
            <input
              type="checkbox"
              checked={task.done}
              onChange={() =>
                setTasks((prev) =>
                  prev.map((t) => (t.id === task.id ? { ...t, done: !t.done } : t)),
                )
              }
              aria-label={`Mark ${task.title} complete`}
              className="h-4 w-4 shrink-0 accent-[oklch(0.263_0.005_67)]"
            />
            <div className="flex min-w-0 flex-wrap items-center gap-2">
              <span
                className={
                  "min-w-0 truncate text-sm text-foreground " + (task.done ? "line-through" : "")
                }
              >
                {task.title}
              </span>
              <span className="shrink-0 rounded-full border border-border bg-background px-2.5 py-0.5 text-[11px] text-muted-foreground">
                {task.category}
              </span>
            </div>
            <button
              onClick={() => setTasks((prev) => prev.filter((t) => t.id !== task.id))}
              aria-label={`Delete ${task.title}`}
              className="shrink-0 rounded-full p-2 text-muted-foreground transition-colors hover:bg-accent hover:text-destructive"
            >
              <Trash2 className="h-4 w-4" />
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
