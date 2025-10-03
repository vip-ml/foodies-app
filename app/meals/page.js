import styles from "./page.module.css";
import Link from "next/link";
import { Suspense } from "react";
import MealsGrid from "../../components/meals/meals-grid";
import { getMeals } from "@/lib/meals";
async function Meals() {
    const meals = await getMeals();
    return <MealsGrid meals={meals} />
}

export default async function MealsPage() {

    return (
        <>
            <header className={styles.header}>
                <h1>
                    Delicious meals, created <span className={styles.highlight}>by you</span>
                </h1>
                <p>Choose your favourite recipe and cook it your self!</p>
                <p className={styles.cta}>
                    <Link href="meals/share">Share your favourite recipe</Link>
                </p>

            </header>
            <main className={styles.main}>
                <Suspense fallback={<p className={styles.loading}>Loading meals...</p>}>
                    <Meals />
                </Suspense>
            </main>

        </>
    );
}