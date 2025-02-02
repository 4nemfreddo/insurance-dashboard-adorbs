interface ClaimHeaderProps {
  title: string;
}

export const ClaimHeader = ({ title }: ClaimHeaderProps) => {
  return (
    <div className="flex justify-between items-center">
      <h1 className="text-2xl font-semibold tracking-tight">{title}</h1>
    </div>
  );
};